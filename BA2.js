function reverseString(str) {
    for (var revStr = "", i = str.length - 1; i >= 0; i--) {
      revStr += str[i];
    }
    return revStr;
}

reverseString("hello");