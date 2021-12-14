sap.ui.define([], function () {
  var __exports = {
    /**
     * Rounds the currency value to 2 digits
     *
     * @public
     * @param {string} sValue value to be formatted
     * @returns {string} formatted currency value with 2 digits
     */
    currencyValue: sValue => {
      if (!sValue) {
        return "";
      }

      return parseFloat(sValue).toFixed(2);
    }
  };
  return __exports;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9mb3JtYXR0ZXIudHMiXSwibmFtZXMiOlsiY3VycmVuY3lWYWx1ZSIsInNWYWx1ZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiO2tCQUFlO0FBQ2Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQ0EsSUFBQUEsYUFBYSxFQUFHQyxNQUFELElBQW1CO0FBQ2pDLFVBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1osZUFBTyxFQUFQO0FBQ0E7O0FBRUQsYUFBT0MsVUFBVSxDQUFDRCxNQUFELENBQVYsQ0FBbUJFLE9BQW5CLENBQTJCLENBQTNCLENBQVA7QUFDQTtBQWRhLEciLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcblx0LyoqXHJcblx0ICogUm91bmRzIHRoZSBjdXJyZW5jeSB2YWx1ZSB0byAyIGRpZ2l0c1xyXG5cdCAqXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzVmFsdWUgdmFsdWUgdG8gYmUgZm9ybWF0dGVkXHJcblx0ICogQHJldHVybnMge3N0cmluZ30gZm9ybWF0dGVkIGN1cnJlbmN5IHZhbHVlIHdpdGggMiBkaWdpdHNcclxuXHQgKi9cclxuXHRjdXJyZW5jeVZhbHVlOiAoc1ZhbHVlOnN0cmluZykgPT4ge1xyXG5cdFx0aWYgKCFzVmFsdWUpIHtcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBhcnNlRmxvYXQoc1ZhbHVlKS50b0ZpeGVkKDIpO1xyXG5cdH1cclxufSJdfQ==