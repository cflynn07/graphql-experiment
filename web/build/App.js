'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRelay = require('react-relay');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Accounts'
      ),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'h2',
        null,
        'Emails'
      )
    );
  };

  return App;
}(_react2.default.Component);

exports.Container = _reactRelay2.default.createContainer(App, {
  fragments: {
    accounts: function accounts() {
      return function () {
        return {
          children: [{
            fieldName: 'id',
            kind: 'Field',
            metadata: {
              isRequisite: true
            },
            type: 'ID'
          }, {
            fieldName: 'name',
            kind: 'Field',
            metadata: {},
            type: 'String'
          }],
          id: _reactRelay2.default.QL.__id(),
          kind: 'Fragment',
          metadata: {},
          name: 'App_AccountsRelayQL',
          type: 'Account'
        };
      }();
    }
  }
});

exports.route = {
  name: 'AppContainerRoute',
  params: {},
  queries: {
    account: function account() {
      return function () {
        return {
          calls: [{
            kind: 'Call',
            metadata: {
              type: 'ID!'
            },
            name: 'id',
            value: {
              kind: 'CallValue',
              callValue: 1
            }
          }],
          fieldName: 'account',
          kind: 'Query',
          metadata: {
            identifyingArgName: 'id',
            identifyingArgType: 'ID!'
          },
          name: 'App',
          type: 'Account'
        };
      }();
    }
  }
};