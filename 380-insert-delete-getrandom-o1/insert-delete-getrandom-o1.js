var RandomizedSet = function() {
    this.list = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.list.includes(val)) {
        return false;
    }

    this.list.push(val);
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.list.includes(val)) {
        return false;
    }

    let index = this.list.indexOf(val);
    this.list.splice(index, 1);

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let index = Math.floor(Math.random() * this.list.length);
    return this.list[index];
};