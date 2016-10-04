module.exports = {
	User : function(name){
		this._name = name;
		this.save = function(callback){
			callback();
		};
	}		
}