function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let check of test) {
      if (target.indexOf(check) < 0) return false;
    }
    return true;
}