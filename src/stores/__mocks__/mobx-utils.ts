const mobxUtils = jest.genMockFromModule('mobx-utils')

mobxUtils.now = () => (+new Date(2017, 1, 14, 15, 22))

module.exports = mobxUtils