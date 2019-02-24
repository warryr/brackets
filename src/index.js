module.exports = function check(str, bracketsConfig) {
    const stack = [];

    for (let i = 0, len = str.length; i < len; i++){
        let pair = tryGetCloserPair(str[i]);

        if (pair != null){
            if (stack.length === 0){
                if (pair === str[i]){
                    stack.push(str[i]);
                } else{
                    return false;
                }
            }
            else{
                const temp = stack.pop();
                if (temp !== pair){
                    if (pair === str[i]){
                        stack.push(temp, str[i]);
                    } else{
                        return false;
                    }
                }
            }
        } else{
            stack.push(str[i]);
        }
    }
    return stack.length === 0;

    function tryGetCloserPair(bracket){
        for (let i = 0, len = bracketsConfig.length; i < len; i++){
            if (bracket === bracketsConfig[i][1]){
                return bracketsConfig[i][0];
            }
        }
        return null;
    }
};
