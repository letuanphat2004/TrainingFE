$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

Add-Type -AssemblyName System.Drawing

$workspaceRoot = [System.IO.Path]::GetFullPath((Split-Path -Parent $PSScriptRoot))
$sourcePath = Join-Path $workspaceRoot "reference\screens\desktop\contact.png"
$outputDirectory = [System.IO.Path]::GetFullPath(
  (Join-Path $workspaceRoot "apps\01-react-css\public\assets\derived")
)
$expectedRoot = [System.IO.Path]::GetFullPath(
  (Join-Path $workspaceRoot "apps\01-react-css\public\assets")
)

if (-not $outputDirectory.StartsWith($expectedRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Refusing to write outside Demo 01 assets: $outputDirectory"
}

New-Item -ItemType Directory -Path $outputDirectory -Force | Out-Null
$source = [System.Drawing.Bitmap]::FromFile($sourcePath)

try {
  $crop = New-Object System.Drawing.Rectangle(0, 1172, 1440, 417)
  $target = New-Object System.Drawing.Bitmap(
    1440,
    417,
    [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
  )
  try {
    $graphics = [System.Drawing.Graphics]::FromImage($target)
    try {
      $destination = New-Object System.Drawing.Rectangle(0, 0, 1440, 417)
      $graphics.DrawImage(
        $source,
        $destination,
        $crop,
        [System.Drawing.GraphicsUnit]::Pixel
      )
    }
    finally {
      $graphics.Dispose()
    }

    $targetPath = Join-Path $outputDirectory "contact-map.png"
    if (Test-Path -LiteralPath $targetPath) {
      Remove-Item -LiteralPath $targetPath -Force
    }
    $target.Save($targetPath, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Output "Extracted derived contact map: 1440x417"
  }
  finally {
    $target.Dispose()
  }
}
finally {
  $source.Dispose()
}
