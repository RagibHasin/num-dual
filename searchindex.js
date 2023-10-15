Search.setIndex({"docnames": ["api", "examples", "generated/num_dual.Dual2_64", "generated/num_dual.Dual3_64", "generated/num_dual.Dual64", "generated/num_dual.HyperDual64", "generated/num_dual.HyperHyperDual64", "generated/num_dual.first_derivative", "generated/num_dual.gradient", "generated/num_dual.hessian", "generated/num_dual.jacobian", "generated/num_dual.partial_hessian", "generated/num_dual.second_derivative", "generated/num_dual.second_partial_derivative", "generated/num_dual.third_derivative", "generated/num_dual.third_partial_derivative", "generated/num_dual.third_partial_derivative_vec", "index"], "filenames": ["api.rst", "examples.rst", "generated/num_dual.Dual2_64.rst", "generated/num_dual.Dual3_64.rst", "generated/num_dual.Dual64.rst", "generated/num_dual.HyperDual64.rst", "generated/num_dual.HyperHyperDual64.rst", "generated/num_dual.first_derivative.rst", "generated/num_dual.gradient.rst", "generated/num_dual.hessian.rst", "generated/num_dual.jacobian.rst", "generated/num_dual.partial_hessian.rst", "generated/num_dual.second_derivative.rst", "generated/num_dual.second_partial_derivative.rst", "generated/num_dual.third_derivative.rst", "generated/num_dual.third_partial_derivative.rst", "generated/num_dual.third_partial_derivative_vec.rst", "index.rst"], "titles": ["API", "Examples", "num_dual.Dual2_64", "num_dual.Dual3_64", "num_dual.Dual64", "num_dual.HyperDual64", "num_dual.HyperHyperDual64", "num_dual.first_derivative", "num_dual.gradient", "num_dual.hessian", "num_dual.jacobian", "num_dual.partial_hessian", "num_dual.second_derivative", "num_dual.second_partial_derivative", "num_dual.third_derivative", "num_dual.third_partial_derivative", "num_dual.third_partial_derivative_vec", "num_dual - generalized (hyper) dual numbers in python"], "terms": {"let": 1, "": 1, "defin": 1, "simpl": 1, "scalar": [1, 7, 8, 9, 11, 12, 13, 14, 15, 16], "valu": [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "function": [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "which": [1, 7, 8, 9, 10, 11, 12, 14], "we": 1, "want": 1, "f": [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "x": [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "3": [1, 2, 4, 5], "2": [1, 2, 4, 5], "6": [1, 5], "def": 1, "return": 1, "The": [1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "i": [1, 2, 4, 7, 8, 9, 10, 11, 12, 14, 16], "just": 1, "like": 1, "regular": 1, "python": 1, "differ": 1, "from": [1, 2, 4, 5], "though": 1, "us": [1, 2, 3, 4, 5, 6, 17], "hyper": [1, 5, 6], "dual": [1, 2, 3, 4, 5, 6], "number": [1, 2, 3, 4, 5, 6], "For": 1, "need": [1, 17], "call": 1, "input": 1, "set": 1, "part": 1, "\u03b5": [1, 4], "1": [1, 2, 4, 5], "0": [1, 2, 4, 5], "num_dual": 1, "import": [1, 2, 4, 5], "dual64": [1, 17], "1\u03b5": 1, "Then": 1, "result": 1, "also": 1, "where": [1, 2, 4], "real": [1, 5], "would": 1, "get": 1, "simpli": 1, "float": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "point": 1, "wherea": 1, "contain": 1, "8": [1, 2, 4], "12\u03b5": 1, "first_deriv": [1, 4, 17], "12": 1, "howev": 1, "chosen": 1, "uniti": 1, "procedur": 1, "outlin": 1, "abov": 1, "work": 1, "fine": 1, "you": [1, 17], "have": 1, "know": 1, "what": 1, "type": 1, "e": 1, "g": 1, "ha": 1, "hyperdu": 1, "therefor": 1, "introduc": 1, "helper": 1, "can": [1, 17], "declar": 1, "same": 1, "creat": 1, "via": 1, "intern": 1, "correct": 1, "construct": 1, "evalu": [1, 7, 8, 9, 10, 11, 12, 14], "third_deriv": [1, 17], "f0": 1, "fx": 1, "fxx": 1, "fxxx": 1, "print": 1, "nf": 1, "multivari": [1, 8, 9, 10, 11], "sever": 1, "variabl": [1, 11, 13, 15, 16], "well": 1, "A": [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "often": 1, "benchmark": 1, "optim": 1, "problem": 1, "rosenbrock": 1, "y": [1, 2, 4, 5, 11, 13, 15], "b": [1, 5], "its": [1, 4, 11], "ar": 1, "implement": 1, "scipi": 1, "second_partial_deriv": [1, 5, 17], "rosen": 1, "rosen_d": 1, "np": [1, 2, 4], "5": 1, "calcul": [1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "bivari": [1, 13, 15, 16], "two": 1, "paramet": 1, "becaus": 1, "take": 1, "one": 1, "singl": 1, "vector": [1, 8, 9, 10, 11], "wrap": 1, "lambda": [1, 2, 4, 5], "56": 1, "151": 1, "150": 1, "200": 1, "tupl": 1, "w": [1, 11, 13, 15, 16], "r": [1, 11, 13, 15, 16], "t": [1, 11, 13, 15, 16], "now": 1, "compar": 1, "our": 1, "analyt": [1, 17], "solut": 1, "fy": 1, "fxy": 1, "assert": 1, "all": 1, "arrai": 1, "gradient": [1, 9, 11, 17], "directli": [1, 17], "_": 1, "consid": 1, "three": 1, "Such": 1, "helmholtz": 1, "energi": 1, "denot": 1, "statist": 1, "mechan": 1, "thermodynam": 1, "It": 1, "volum": 1, "v": 1, "temperatur": 1, "particl": 1, "possibli": 1, "compon": 1, "n": 1, "thi": 1, "an": 1, "ideal": 1, "ga": 1, "some": 1, "interest": 1, "properti": 1, "300": 1, "20": 1, "mw": 1, "39": [1, 5], "948e": 1, "4e": 1, "helmholtz_energi": 1, "h": 1, "62607015e": 1, "34": 1, "nav": 1, "02214076e23": 1, "rga": 1, "314": 1, "isinst": 1, "list": [1, 16], "de_brogli": 1, "sqrt": [1, 2, 4], "pi": 1, "partial_dens": 1, "sum": 1, "log": 1, "specif": 1, "equat": 1, "note": 1, "besid": 1, "being": 1, "easili": 1, "mathemat": 1, "express": 1, "respect": 1, "neg": 1, "entropi": 1, "956": 1, "4722861925324": 1, "Or": 1, "mu": 1, "chemic": 1, "potenti": 1, "54192": 1, "23064420561": 1, "46593": 1, "74696257142": 1, "shown": 1, "veri": 1, "provid": 1, "lot": 1, "exp": 1, "sin": 1, "co": 1, "4": [1, 2, 4, 5], "497780053946161": 1, "yield": 1, "\u03b51": [1, 2, 5], "\u03b52": [1, 5], "ident": 1, "hyperdual64": [1, 17], "hd64": [1, 5], "497780053946162": 1, "053427893898621\u03b51": 1, "053427893898621\u03b52": 1, "9": 1, "463073681596605\u03b51\u03b52": 1, "class": [2, 3, 4, 5, 6], "second": [2, 11, 12, 13, 14, 15, 16, 17], "order": [2, 3, 6], "64": [2, 3, 4, 5, 6], "bit": [2, 3, 4, 5, 6], "field": [2, 3, 4, 5, 6], "consist": [2, 4, 5], "f_0": [2, 4], "f_1": [2, 4], "\u03b5_1": 2, "f_2": 2, "first": [2, 4, 7, 11, 12, 13, 14, 15, 16, 17], "deriv": [2, 4, 5, 7, 12, 13, 14, 15, 16, 17], "exampl": [2, 4, 5, 17], "d264": 2, "from_r": [2, 4, 5], "\u03b51\u00b2": 2, "second_deriv": [2, 17], "numpi": [2, 4, 17], "df": [2, 4], "d2f": 2, "18": [2, 4], "25": [2, 4], "96875": 2, "__init__": [2, 3, 4, 5, 6, 17], "method": [2, 3, 4, 5, 6], "attribut": [2, 3, 4, 5, 6], "third": [3, 6, 14, 15, 16, 17], "d64": 4, "c": 5, "d": 5, "\u03b51\u03b52": 5, "constructor": 5, "comput": [5, 17], "partial": [5, 11, 13, 15, 16, 17], "f_x": 5, "f_y": 5, "f_xy": 5, "28": 5, "24": 5, "univari": [7, 12, 14], "callabl": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "hessian": [11, 17], "subset": 11, "parit": [13, 15, 16], "z": 15, "trivari": 15, "j": 16, "k": 16, "arbitrari": 16, "mani": 16, "integ": 16, "index": 16, "exact": 17, "without": 17, "write": 17, "numer": 17, "differenti": 17, "pypi": 17, "pip": 17, "To": 17, "code": 17, "rust": 17, "compil": 17, "maturin": 17, "latest": 17, "master": 17, "github": 17, "git": 17, "http": 17, "com": 17, "itt": 17, "ustutt": 17, "multipl": 17, "argument": 17, "compat": 17, "api": 17, "jacobian": 17, "partial_hessian": 17, "third_partial_deriv": 17, "third_partial_derivative_vec": 17, "dual2_64": 17, "dual3_64": 17, "hyperhyperdual64": 17}, "objects": {"num_dual": [[2, 0, 1, "", "Dual2_64"], [3, 0, 1, "", "Dual3_64"], [4, 0, 1, "", "Dual64"], [5, 0, 1, "", "HyperDual64"], [6, 0, 1, "", "HyperHyperDual64"], [7, 2, 1, "", "first_derivative"], [8, 2, 1, "", "gradient"], [9, 2, 1, "", "hessian"], [10, 2, 1, "", "jacobian"], [11, 2, 1, "", "partial_hessian"], [12, 2, 1, "", "second_derivative"], [13, 2, 1, "", "second_partial_derivative"], [14, 2, 1, "", "third_derivative"], [15, 2, 1, "", "third_partial_derivative"], [16, 2, 1, "", "third_partial_derivative_vec"]], "num_dual.Dual2_64": [[2, 1, 1, "", "__init__"]], "num_dual.Dual3_64": [[3, 1, 1, "", "__init__"]], "num_dual.Dual64": [[4, 1, 1, "", "__init__"]], "num_dual.HyperDual64": [[5, 1, 1, "", "__init__"]], "num_dual.HyperHyperDual64": [[6, 1, 1, "", "__init__"]]}, "objtypes": {"0": "py:class", "1": "py:method", "2": "py:function"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"], "2": ["py", "function", "Python function"]}, "titleterms": {"api": 0, "exampl": 1, "first": 1, "second": 1, "third": 1, "deriv": 1, "partial": 1, "comput": 1, "multipl": 1, "argument": 1, "compat": 1, "numpi": 1, "num_dual": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "dual2_64": 2, "dual3_64": 3, "dual64": 4, "hyperdual64": 5, "hyperhyperdual64": 6, "first_deriv": 7, "paramet": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "return": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "gradient": 8, "hessian": 9, "jacobian": 10, "partial_hessian": 11, "second_deriv": 12, "second_partial_deriv": 13, "third_deriv": 14, "third_partial_deriv": 15, "third_partial_derivative_vec": 16, "gener": 17, "hyper": 17, "dual": 17, "number": 17, "python": 17, "instal": 17, "build": 17, "from": 17, "sourc": 17}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"API": [[0, "api"]], "Examples": [[1, "examples"]], "First, second and third derivatives": [[1, "first-second-and-third-derivatives"]], "Partial derivatives": [[1, "partial-derivatives"]], "Compute partial derivatives of multiple arguments": [[1, "compute-partial-derivatives-of-multiple-arguments"]], "Compatibility with numpy": [[1, "compatibility-with-numpy"]], "num_dual.Dual2_64": [[2, "num-dual-dual2-64"]], "num_dual.Dual3_64": [[3, "num-dual-dual3-64"]], "num_dual.Dual64": [[4, "num-dual-dual64"]], "num_dual.HyperDual64": [[5, "num-dual-hyperdual64"]], "num_dual.HyperHyperDual64": [[6, "num-dual-hyperhyperdual64"]], "num_dual.first_derivative": [[7, "num-dual-first-derivative"]], "Parameters": [[7, "parameters"], [8, "parameters"], [9, "parameters"], [10, "parameters"], [11, "parameters"], [12, "parameters"], [13, "parameters"], [14, "parameters"], [15, "parameters"], [16, "parameters"]], "Returns": [[7, "returns"], [8, "returns"], [9, "returns"], [10, "returns"], [11, "returns"], [12, "returns"], [13, "returns"], [14, "returns"], [15, "returns"], [16, "returns"]], "num_dual.gradient": [[8, "num-dual-gradient"]], "num_dual.hessian": [[9, "num-dual-hessian"]], "num_dual.jacobian": [[10, "num-dual-jacobian"]], "num_dual.partial_hessian": [[11, "num-dual-partial-hessian"]], "num_dual.second_derivative": [[12, "num-dual-second-derivative"]], "num_dual.second_partial_derivative": [[13, "num-dual-second-partial-derivative"]], "num_dual.third_derivative": [[14, "num-dual-third-derivative"]], "num_dual.third_partial_derivative": [[15, "num-dual-third-partial-derivative"]], "num_dual.third_partial_derivative_vec": [[16, "num-dual-third-partial-derivative-vec"]], "num_dual - generalized (hyper) dual numbers in python": [[17, "num-dual-generalized-hyper-dual-numbers-in-python"]], "Installation": [[17, "installation"]], "Build from source": [[17, "build-from-source"]]}, "indexentries": {"dual2_64 (class in num_dual)": [[2, "num_dual.Dual2_64"]], "__init__() (num_dual.dual2_64 method)": [[2, "num_dual.Dual2_64.__init__"]], "dual3_64 (class in num_dual)": [[3, "num_dual.Dual3_64"]], "__init__() (num_dual.dual3_64 method)": [[3, "num_dual.Dual3_64.__init__"]], "dual64 (class in num_dual)": [[4, "num_dual.Dual64"]], "__init__() (num_dual.dual64 method)": [[4, "num_dual.Dual64.__init__"]], "hyperdual64 (class in num_dual)": [[5, "num_dual.HyperDual64"]], "__init__() (num_dual.hyperdual64 method)": [[5, "num_dual.HyperDual64.__init__"]], "hyperhyperdual64 (class in num_dual)": [[6, "num_dual.HyperHyperDual64"]], "__init__() (num_dual.hyperhyperdual64 method)": [[6, "num_dual.HyperHyperDual64.__init__"]], "first_derivative() (in module num_dual)": [[7, "num_dual.first_derivative"]], "gradient() (in module num_dual)": [[8, "num_dual.gradient"]], "hessian() (in module num_dual)": [[9, "num_dual.hessian"]], "jacobian() (in module num_dual)": [[10, "num_dual.jacobian"]], "partial_hessian() (in module num_dual)": [[11, "num_dual.partial_hessian"]], "second_derivative() (in module num_dual)": [[12, "num_dual.second_derivative"]], "second_partial_derivative() (in module num_dual)": [[13, "num_dual.second_partial_derivative"]], "third_derivative() (in module num_dual)": [[14, "num_dual.third_derivative"]], "third_partial_derivative() (in module num_dual)": [[15, "num_dual.third_partial_derivative"]], "third_partial_derivative_vec() (in module num_dual)": [[16, "num_dual.third_partial_derivative_vec"]]}})