module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("xfzJ");


/***/ }),

/***/ "csVp":
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Mr\",\"firstName\":\"Amitoj\",\"lastName\":\"Singh\",\"email\":\"testhost20@gmail.com\",\"role\":\"User\",\"password\":\"123456\",\"id\":1,\"dateCreated\":\"2021-09-14T09:45:49.145Z\",\"dateUpdated\":\"2021-09-14T09:45:49.145Z\"}]");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "pRT7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ fetchWrapper; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ usersRepo; });

// CONCATENATED MODULE: ./helpers/fetch-wrapper.js
const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete
};

function get(url) {
  const requestOptions = {
    method: 'GET'
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse);
} // prefixed with underscored because delete is a reserved word in javascript


function _delete(url) {
  const requestOptions = {
    method: 'DELETE'
  };
  return fetch(url, requestOptions).then(handleResponse);
} // helper functions


function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = data && data.message || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
// CONCATENATED MODULE: ./helpers/users-repo.js
const fs = __webpack_require__("mw/K");

let users = __webpack_require__("csVp");

const usersRepo = {
  getAll,
  getById,
  create,
  update,
  delete: users_repo_delete
};

function getAll() {
  return users;
}

function getById(id) {
  return users.find(x => x.id.toString() === id.toString());
}

function create({
  title,
  firstName,
  lastName,
  email,
  role,
  password
}) {
  const user = {
    title,
    firstName,
    lastName,
    email,
    role,
    password
  }; // validate

  if (users.find(x => x.email === user.email)) throw `User with the email ${user.email} already exists`; // generate new user id

  user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1; // set date created and updated

  user.dateCreated = new Date().toISOString();
  user.dateUpdated = new Date().toISOString(); // add and save user

  users.push(user);
  saveData();
}

function update(id, {
  title,
  firstName,
  lastName,
  email,
  role,
  password
}) {
  const params = {
    title,
    firstName,
    lastName,
    email,
    role,
    password
  };
  const user = users.find(x => x.id.toString() === id.toString()); // validate

  if (params.email !== user.email && users.find(x => x.email === params.email)) throw `User with the email ${params.email} already exists`; // only update password if entered

  if (!params.password) {
    delete params.password;
  } // set date updated


  user.dateUpdated = new Date().toISOString(); // update and save

  Object.assign(user, params);
  saveData();
} // prefixed with underscore '_' because 'delete' is a reserved word in javascript


function users_repo_delete(id) {
  // filter out deleted user and save
  users = users.filter(x => x.id.toString() !== id.toString());
  saveData();
} // private helper functions


function saveData() {
  fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}
// CONCATENATED MODULE: ./helpers/index.js



/***/ }),

/***/ "xfzJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pRT7");

/* harmony default export */ __webpack_exports__["default"] = (handler);

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getUsers();

    case 'POST':
      return createUser();

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  function getUsers() {
    const users = helpers__WEBPACK_IMPORTED_MODULE_0__[/* usersRepo */ "b"].getAll();
    return res.status(200).json(users);
  }

  function createUser() {
    try {
      helpers__WEBPACK_IMPORTED_MODULE_0__[/* usersRepo */ "b"].create(req.body);
      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({
        message: error
      });
    }
  }
}

/***/ })

/******/ });