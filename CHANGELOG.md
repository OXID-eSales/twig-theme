# Change Log for OXID Twig Theme

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.1.1] - Unreleased

### Fixed
- In case of sAltImageUrl set, calculation of zoom image size is wrong [Wave-PR-123](https://github.com/OXID-eSales/wave-theme/pull/123)

## [2.1.0] - 2022-11-23

### Added
- Template blocks on login form:
    - `checkout_options_login_passwordfield` in `form/login.html.twig`
    - `checkout_options_loginaccount_passwordfield` in `form/login_account.html.twig`
    - `checkout_options_loginaccount_submitbutton` in `form/login_account.html.twig`

## [2.0.0] - 2022-10-28

### Added
- Support for PHP v8

### Changed
- Switched to Twig v3

### Removed
- Support for PHP v7
- RSS functionality
- Betanote feature
- News feature
- `setup.sql` file support
- Debug leftovers [PR-2](https://github.com/OXID-eSales/twig-theme/pull/2)

## [1.1.0] - 2022-09-08

### Fixed
- Minor issues to be compatible with eShop 6.5

## [1.0.1] - 2021-07-20

### Fixed
- Removed debug call leftover
- Improve jQuery security

## [1.0.0] - 2019-11-21

[2.1.1]: https://github.com/OXID-eSales/twig-theme/compare/v2.1.0...b-7.0.x
[2.1.0]: https://github.com/OXID-eSales/twig-theme/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/OXID-eSales/twig-theme/compare/v1.1.0...v2.0.0
[1.1.0]: https://github.com/OXID-eSales/twig-theme/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/OXID-eSales/twig-theme/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/OXID-eSales/twig-theme/releases/tag/v1.0.0
