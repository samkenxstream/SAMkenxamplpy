# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 0.9.3 - 2023-04-21
- Removed CamelCase from docstrings.

## 0.9.2 - 2023-04-05
- Add message to append to AMPLException messages.

## 0.9.1 - 2023-03-22
- Simplify ampl_notebook import: "from amplpy import ampl_notebook".

## 0.9.0 - 2023-03-14
- Preload amplpy.modules if found (reduces need for modules.load()).
- Vendor ampltools.

## 0.8.6 - 2023-01-23
- Add amplpy.modules.

## 0.8.5 - 2022-08-23
- Update libampl to 2.0.11-20220823.
- Ensure times and gentimes default to disabled.

## 0.8.4 - 2022-08-02
- Update libampl to 2.0.10-20220627.
- Disable options times and gentimes during internal operations.

## 0.8.3 - 2022-06-23
- Improved handling of numpy types.

## 0.8.2 - 2022-05-27
- [BREAKING] Raise RuntimeError in Entity.get_values if there are any issues with the data.
- Update libampl to 2.0.9.20220527.
- Fixed hanging when license check fails on Windows.
- Allow '-' in option names.
- Drop 32-bit support.
- Add ampltools as dependency.

## 0.8.1 - 2022-01-21
- [BREAKING] Raise KeyError exceptions instead of TypeError exceptions when accessing entities that do not exist.

## 0.8.0 - 2021-12-24
- Update libampl to 2.0.8-2.
- Allow users to specify the name of the AMPL executable.
- Allow users to choose between using camelCase and snake_case methods.
- Drop AMPL.exportGurobi model. It is now part of amplpy_gurobi.

## 0.7.2 - 2021-12-01
- Improve performance of many operations by moving code to the C++ layer.

## 0.7.1 - 2021-07-26
- Update libampl to 2.0.6-0.
- Add Entity.xref.
- Include complete license error message in license error exceptions.

## 0.7.0 - 2021-01-25
- Fix bug when assigning sets with mixed types.
- Add support for pathlib.Path paths.
- Basic support for MSYS, CYGWIN, and MINGW.
- Support for linux-ppc64le and linux-aarch64.
- Update libampl to 2.0.4-0.

## 0.6.11 - 2020-02-28
- Add support for ppc64le.

## 0.6.10 - 2019-11-16
- Fix "ImportError: DLL load failed" not fixed in the previous version.

## 0.6.9 - 2019-11-16
- Fix "ImportError: No module named _amplpython" introduced in the previous version.

## 0.6.8 - 2019-11-16
- Add Python 3.8 support.

## 0.6.7 - 2019-06-22
- Add optional parameter index_names to DataFrame.fromPandas.
- Add DataFrame.fromDict to load data from dictionaries.
- Allow setting entity values directly from dictionaries.

## 0.6.6 - 2019-05-11
- Update internal library.
- Add AMPL.exportModel.
- AMPL.exportData now supports indexed sets.

## 0.6.5 - 2019-04-14
- Improve AMPL.exportGurobiModel and AMPL.importGurobiSolution.
- Add verbose option to AMPL.exportGurobiModel.
- Add register_magics to register `%%ampl` and `%%ampl_eval`.

## 0.6.4 - 2019-02-13
- Fix dll loading issue with python versions that come with conda.

## 0.6.3 - 2018-12-04
- Fix issue with indexed sets (by updating the internal library).

## 0.6.2 - 2018-11-20
- Add support for Pandas Series.
- Add optional gurobiDriver parameter to AMPL.exportGurobiModel.

## 0.6.1 - 2018-11-13
- Improve robustness of AMPL.exportGurobiModel.
- Improve error message when AMPL is not in the search path.

## 0.6.0 - 2018-11-03
- Upgrade internal API to v2.0.
- Add experimental methods AMPL._startRecording and AMPL._stopRecording.
- Add experimental method AMPL._loadSession.
- Add method AMPL.getCurrentObjective.
- Add support to Python 3.7.
- Fix truncated values in sets (amplapi#337).
- Add method AMPL.importGurobiSolution.
- Add method AMPL.getOutput.

## 0.5.0 - 2018-05-06
- Breaking: AMPL errors raise exceptions by default.
- Breaking: Drop support for Python 3.3 on Linux.
- Add AMPL.exportData.
- Add AMPL.exportGurobiModel.

## 0.4.1 - 2018-04-12
- Fix: compatibility issues with multiple python versions.

## 0.4.0 - 2018-04-10
- Improve interaction with Pandas and Numpy.
- Add DataFrame.fromNumpy.
- Entity.setValues now accepts Pandas DataFrames.
- Parameter.setValues and Set.setValues now accept Numpy arrays and matrices.
- Breaking: DataFrame.toList and DataFrame.doDict do not wrap scalar values into lists anymore.

## 0.3.4 - 2018-02-24
- Fix: error messages not being shown in Jupyter Notebooks.
- Breaking: AMPL errors no longer raise exceptions by default.

## 0.3.3 - 2018-01-09
- Fix issues related to the passing of infinity to AMPL.

## 0.3.2 - 2017-12-13
- Fix issue with DataFrames created with pandas.read_table.

## 0.3.1 - 2017-11-17
- Fix precision issue in parameters.

## 0.3.0 - 2017-10-13
- Introduce alternative method to access entities.

## 0.2.0 - 2017-08-05
- Add DataFrame.fromPandas and DataFrame.toPandas.

## 0.1.2 - 2017-08-04
- Improve DataFrame initialization.
- Fix issue with stdout in jupyter notebooks.

## 0.1.1 - 2017-07-30
- Fix issues with strings in Python 3.

## 0.1.0 - 2017-07-22
- Initial release.
