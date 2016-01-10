# ChangeLog
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.5] - 2016-01-10
### Fixed
- Fix #18: Correctly parse the px value

### Changed
- Changed names for consistency with package managers
- Update the readme to reflect npm installation

## [2.0.4] - 2015-11-27
### Fixed
- Add package.json

## [2.0.3] - 2015-10-17
### Fixed
- Incorrect mixin reference

## [2.0.2] - 2015-10-17
### Changed
- Remove duplicate `@import` rules
- Separate mixin and functions so they can be included in CodePen demo from GitHub

## [2.0.1] - 2015-10-17
### Changed
- Correctly `@import` partials.

### Changed
- Renamed files
- Simplify folder structure

## [2.0.0] - 2015-10-17
### Added
- Allow option to override the baseline on a per style basis.

### Changed
- Renamed files
- Simplify folder structure

## Fixed
- Fixed issue #9

### Breaking Changes
- The third parameter is now a baseline override (int) and will not add extra padding.

## [1.5.1] - 2015-05-21
### Changed
- Fix padding multiplier warning being incorrectly triggered.

## [1.5.0] - 2015-05-10
### Added
- Allow heights to be smaller than the specified font size. The value is still rounded to the nearest baseline multiple.

### Changed
- Remove warnings about heights not able to be smaller than the specified font size.
- Specifying horizontal padding should be specified using an integer as it's used as a multiplier

### Deprecated
- Using 'vertical' and 'all' are no longer valid options for specifying horizontal padding and will be removed in the next version.

## [1.4.0] - 2015-04-15
### Added
- Include some examples in the readme

### Changed
- Allow use of a single, font-size parameter and default to using the next multiple of the baseline to calculate line-height.


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
