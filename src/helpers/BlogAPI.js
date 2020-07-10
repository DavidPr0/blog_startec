import Cookies from 'js-cookie';
import qs from 'qs';

// const BASEAPI = 'http://alunos.b7web.com.br:501';
const BASEAPI = 'http://localhost/startec/api-cms';
// const BASEAPI = 'http://api-cms.com.br';

const apiFetchFile = async (endpoint, body) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.append('token', token);
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method: 'POST',
        body
    });
    const json = await res.json();

    if (json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}

const apiFetchPost = async ( endpoint, body ) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }
    console.log('passou aqui');
    const res = await fetch(BASEAPI+endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'Application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    });
    const json = await res.json();

    if (json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}

const apiFetchGet = async ( endpoint, body = [] ) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }

    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();

    if (json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}

const OlxAPI = {
    login: async (email, senha) => {
        const json = await apiFetchPost(
            '/usuarios/login',
            { email, senha }
        );
        return json;
    },

    register:async (nome, email, senha) => {
        const json = await apiFetchPost(
            '/usuarios/novo',
            {nome, email, senha}
        );
        return json;
    },

    getStates:async () => {
        const json = await apiFetchGet(
            '/states'
        );
        return json.states;
    },

    getDestaques:async () => {
        const json = await apiFetchGet(
            '/categories'
        );
        return json.categories;
    },

    getCont:async (options) => {
        const json = await apiFetchGet(
            '/ad/list',
            options
        );
        return json;
    },

    getContInfo:async (id, otherInfor = false ) => {
        const json = await apiFetchGet(
            '/ad/item',
            {id, other:otherInfor }
        );
        return json;
    },

    getTemas:async () => {
        const json = await apiFetchGet(
            '/temas'
        );
    
        return json.retorno;
    },
 
    getAutores:async () => {
        const json = await apiFetchGet(
            '/autores'
        );
    
        return json.retorno;
    },

    addAd:async (fData) => {
        const json = await apiFetchFile(
            '/conteudos/novo',
            fData
        );
        return json;
    },

    cadAutor:async (fData) => {
        const json = await apiFetchFile(
            '/autores/novo',
            fData
        );
        return json;
    },

    cadTema:async (fData) => {
        const json = await apiFetchFile(
            '/temas/novo',
            fData
        );
        return json;
    }
};

export default () => OlxAPI;