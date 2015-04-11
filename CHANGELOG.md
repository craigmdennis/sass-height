# ChangeLog
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [1.3.1] - 2015-04-05
### Changed
- Namespace the variables to avoid collisions.

## [1.3.0] - 2015-04-02
### Added
- Changelog
- Configuration options to override defaults. Useful if you want to output `px` in a separate stylesheet.

## [1.2.0] - 2015-03-31
### Changed
- Allow 1:1 matching with base font height rather than stepping up to next baseline multiple.

### Fixed
- Don't output negative or 0 padding.


## [1.1.0] - 2015-03-28
### Added
- Option to apply padding equally on all sides; matching top and bottom calculation.


## [1.0.0] - 2015-03-23
### Added
- First working version of the sass-height mixin.
