(function(global, factory) {

    "use strict";

    if (typeof module === "object" && typeof module.exports === "object") {

        module.exports = global.document ?
            factory(global, true) :
            function(w) {
                if (!w.document) {
                    throw new Error("this requires a window with a document");
                }
                return factory(w);
            };
    } else {
        factory(global);
    }

})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {

	// "use strict";

	var idName 		= 'aloetip',
		className 	= 'aloetip';

	var tSetTimeout;

	function setOpacity( el, v){
	 	el.filters ? el.style.filter = 'alpha(opacity=' + v + ')' : el.style.opacity = v / 100; 
	}

	function removeElement(el){
         var p_el = el.parentNode;
         if(p_el){
                p_el.removeChild(el);  
         }
	}

	var AloeTip = {

		param : {},
		$dom : null,

		_setParam : function(obj){
			obj = obj || {};
			this.param.text = typeof(obj) === 'object' ? obj.text : obj;
			this.param.speend = obj.speed || 100;
			this.param.zIndex = obj.zIndex || 10001;
			this.param.type = obj.type || 'info'; // info success warning danger
			this.param.time = obj.time || 2000;
		},

		show : function(obj){


			if(!typeof(obj) === 'object' || !typeof(obj) === 'string' ){
				console.warn('aloeTip param warn!');
				return;
			}

			if(document.getElementById(idName)){
				clearTimeout(tSetTimeout);
				removeElement(document.getElementById(idName));
			}

			this._setParam(obj);
			this._createDom();
			
		},

		_createDom : function(){

			this.$dom = document.createElement('div');
			this.$dom.setAttribute('class',className + ' ' + className + '-' + this.param.type);
			this.$dom.setAttribute('className',className + ' ' + className + '-' + this.param.type);
			this.$dom.setAttribute('id',idName);
			this.$dom.innerHTML  = this.param.text;

    		setOpacity(this.$dom, 0);

			var body = document.getElementsByTagName('body');
			body[0].appendChild(this.$dom);

			this._fadeIn();
		},

		_fadeIn : function(){

			var self = this;
			var val = 0;

			(function(){
			    setOpacity(self.$dom, val);
			    val += 5;
			    if (val <= 100) {
			        tSetTimeout = setTimeout(arguments.callee, self.param.speed);
			    }else {
			    	tSetTimeout = setTimeout(function(){
			    		self._fadeOut.call(self);
			    	},self.param.time);
			    }
			})();
		},

		_fadeOut : function(){

			var self = this;
    		var val = 100;

			(function(){
			    setOpacity(self.$dom, val);
			    val -= 5;
			    if (val >= 0) {
			        tSetTimeout = setTimeout(arguments.callee, self.param.speed);
			    }else {
			    	removeElement(self.$dom);
			    }
			})();
		}


	};



	if ( typeof define === "function" && define.amd ) {
		define( "aloetip", [], function() {
			return AloeTip;
		} );
	}

	if ( !noGlobal ) {
		window.AloeTip = AloeTip;
	}


	return AloeTip;
} );