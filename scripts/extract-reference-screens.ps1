$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

Add-Type -AssemblyName System.Drawing

$workspaceRoot = [System.IO.Path]::GetFullPath((Split-Path -Parent $PSScriptRoot))
$sourceDirectory = Join-Path $workspaceRoot "Beautice - Clinic & Beauty Consultation Website Design (Community)"
$sourcePath = Join-Path $sourceDirectory "Beautice - Clinic & Beauty Consultation Website Design (Community).png"
$manifestPath = Join-Path $workspaceRoot "packages\design-contract\src\reference-screens.json"
$outputDirectory = [System.IO.Path]::GetFullPath((Join-Path $workspaceRoot "reference\screens\desktop"))

if (-not (Test-Path -LiteralPath $sourcePath -PathType Leaf)) {
  throw "Composite reference image not found: $sourcePath"
}

if (-not (Test-Path -LiteralPath $manifestPath -PathType Leaf)) {
  throw "Reference screen manifest not found: $manifestPath"
}

$expectedOutputRoot = [System.IO.Path]::GetFullPath((Join-Path $workspaceRoot "reference\screens"))
if (-not $outputDirectory.StartsWith($expectedOutputRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Refusing to write outside the intended reference directory: $outputDirectory"
}

New-Item -ItemType Directory -Path $outputDirectory -Force | Out-Null
$screens = Get-Content -LiteralPath $manifestPath -Raw -Encoding UTF8 | ConvertFrom-Json
$composite = [System.Drawing.Bitmap]::FromFile($sourcePath)

try {
  if ($composite.Width -ne 13340 -or $composite.Height -ne 5003) {
    throw "Unexpected composite dimensions: $($composite.Width)x$($composite.Height)"
  }

  foreach ($screen in $screens) {
    $crop = $screen.crop
    if (
      $crop.x -lt 0 -or
      $crop.y -lt 0 -or
      ($crop.x + $crop.width) -gt $composite.Width -or
      ($crop.y + $crop.height) -gt $composite.Height
    ) {
      throw "Crop for $($screen.id) is outside the composite image."
    }

    $targetPath = [System.IO.Path]::GetFullPath(
      (Join-Path $workspaceRoot ($screen.file -replace "/", "\"))
    )

    if (-not $targetPath.StartsWith($outputDirectory, [System.StringComparison]::OrdinalIgnoreCase)) {
      throw "Refusing to write outside the desktop reference directory: $targetPath"
    }

    $target = New-Object System.Drawing.Bitmap(
      [int]$crop.width,
      [int]$crop.height,
      [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
    )

    try {
      $graphics = [System.Drawing.Graphics]::FromImage($target)
      try {
        $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::NearestNeighbor
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

        $destinationRectangle = New-Object System.Drawing.Rectangle(
          0,
          0,
          [int]$crop.width,
          [int]$crop.height
        )
        $sourceRectangle = New-Object System.Drawing.Rectangle(
          [int]$crop.x,
          [int]$crop.y,
          [int]$crop.width,
          [int]$crop.height
        )
        $graphics.DrawImage(
          $composite,
          $destinationRectangle,
          $sourceRectangle,
          [System.Drawing.GraphicsUnit]::Pixel
        )
      }
      finally {
        $graphics.Dispose()
      }

      if (Test-Path -LiteralPath $targetPath -PathType Leaf) {
        Remove-Item -LiteralPath $targetPath -Force
      }

      $target.Save($targetPath, [System.Drawing.Imaging.ImageFormat]::Png)
      Write-Output "Extracted $($screen.id): $($crop.width)x$($crop.height)"
    }
    finally {
      $target.Dispose()
    }
  }
}
finally {
  $composite.Dispose()
}
