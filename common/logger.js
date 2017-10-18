var logger = {
    level : 0,
    SILLY : 0,
    DEBUG : 1,
    VERBOSE : 2,
    INFO : 3,
    WARN : 4,
    ERROR : 5,
    log : function(level, moduleName, data){
        if(level >= this.level){
            console.log(new Date()+",",  moduleName+",", data);
        }
    },
    setLevel : function(level){
        this.level = level;
    }

    //winston, fluentd
}
module.exports = logger;
