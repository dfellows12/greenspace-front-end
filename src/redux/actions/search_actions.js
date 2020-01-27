function changeHomeSearchText(value) {
  return { type: "CHANGE_HOME_SEARCH_TEXT", payload: value };
}

function changeIndexSearchText(value) {
  return { type: "CHANGE_INDEX_SEARCH_TEXT", payload: value };
}

export { changeHomeSearchText, changeIndexSearchText  }