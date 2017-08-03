const patterns = [
  'electron-{{VERSION}}-darwin-x64-dsym.zip',
  'electron-{{VERSION}}-darwin-x64-symbols.zip',
  'electron-{{VERSION}}-darwin-x64.zip',
  'electron-{{VERSION}}-linux-arm-symbols.zip',
  'electron-{{VERSION}}-linux-arm.zip',
  'electron-{{VERSION}}-linux-armv7l-symbols.zip',
  'electron-{{VERSION}}-linux-armv7l.zip',
  'electron-{{VERSION}}-linux-ia32-symbols.zip',
  'electron-{{VERSION}}-linux-ia32.zip',
  'electron-{{VERSION}}-linux-x64-symbols.zip',
  'electron-{{VERSION}}-linux-x64.zip',
  'electron-{{VERSION}}-mas-x64-dsym.zip',
  'electron-{{VERSION}}-mas-x64-symbols.zip',
  'electron-{{VERSION}}-mas-x64.zip',
  'electron-{{VERSION}}-win32-ia32-pdb.zip',
  'electron-{{VERSION}}-win32-ia32-symbols.zip',
  'electron-{{VERSION}}-win32-ia32.zip',
  'electron-{{VERSION}}-win32-x64-pdb.zip',
  'electron-{{VERSION}}-win32-x64-symbols.zip',
  'electron-{{VERSION}}-win32-x64.zip',
  'electron.d.ts',
  'ffmpeg-{{VERSION}}-darwin-x64.zip',
  'ffmpeg-{{VERSION}}-linux-arm.zip',
  'ffmpeg-{{VERSION}}-linux-armv7l.zip',
  'ffmpeg-{{VERSION}}-linux-ia32.zip',
  'ffmpeg-{{VERSION}}-linux-x64.zip',
  'ffmpeg-{{VERSION}}-mas-x64.zip',
  'ffmpeg-{{VERSION}}-win32-ia32.zip',
  'ffmpeg-{{VERSION}}-win32-x64.zip'
]

module.exports = function filenames (version) {
  return patterns.map(pattern => pattern.replace('{{VERSION}}', version))
}