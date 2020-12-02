export var setSearchField = function setSearchField(_ref) {
	var type = _ref.type,
	    payload = _ref.payload;

	return {
		type: type,
		payload: payload
	};
};