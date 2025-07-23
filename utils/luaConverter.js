class LuaConverter {
    static convertFromLua(page) {
        const pagesOrigin = window.location.origin === "https://pauloxhbh.github.io"
            ? window.location.origin + "/pokemon-eclipse-wiki"
            : window.location.origin;

        const fileToRead = pagesOrigin + "/data/" + page + ".txt";

        return new Promise((resolve, reject) => {
            fetch(fileToRead)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Arquivo não encontrado ou erro de rede.");
                    }
                    return response.text();
                })
                .then(luaText => {
                    let tableText = luaText
                        .replace(/^[^{]*{/, '{')
                        .replace(/};?\s*$/, '}')
                        .replace(/--.*$/gm, '')                
                        .replace(/\["(.*?)"\]/g, '"$1"')         
                        .replace(/=\s*{([^{}]*)}/g, (match, inner) => {
                            if (/[\w_]+\s*=/.test(inner)) return match; 
                            const items = inner.split(',')
                                .map(i => i.trim())
                                .filter(Boolean)
                                .map(i => /^["'].*["']$/.test(i) ? i : `"${i}"`);
                            return `=[${items.join(',')}]`;
                        })
                        .replace(/([a-zA-Z_][\w]*)\s*=/g, '"$1":')  
                        .replace(/,(\s*})/g, '$1')
                        .replace(/=/g, ': ');                
                    
                    const quotedKeys = tableText.replace(/([{,]\s*)([a-zA-Z_]\w*)(\s*:)/g, '$1"$2"$3');

                    const obj = eval('(' + quotedKeys + ')'); 
                    resolve(obj);
                })
                .catch(err => {
                    console.error('Erro ao converter Lua para JSON:', err);
                    reject(null);
                });
        });
    }
}
