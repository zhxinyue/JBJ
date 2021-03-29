class PublicMethods{
	NewGuid() {
        var guid = "";
        for (var i = 1; i <= 32; i++) {
            var n = Math.floor(Math.random() * 16.0).toString(16);
            guid += n;
            if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
                guid += "-";
        }
        return guid;
    }
	getItem (key) {
        try {
          return JSON.parse(window.sessionStorage.getItem(key));
        } catch (err) {
          return null;
        }
      }
      setItem (key, val) {
        window.sessionStorage.setItem(key, JSON.stringify(val));
      }
      removeItem (key) {
        window.sessionStorage.removeItem(key);
      }
      clear () {
        window.sessionStorage.clear();
      }

}


var Plugins = new PublicMethods();

export default Plugins;

