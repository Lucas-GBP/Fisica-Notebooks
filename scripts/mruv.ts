export enum mruv {inicialPosition, inicialVelocity, aceleration, time, position};

type mruvProps = {
    x_0?:number // posição inicial
    v_0?:number // velocidade inicial
    a?:number // aceleração
    t?:number // tempo
    x?:number // distance
};
export function mruvEquation(data:mruvProps, type:mruv){
    const equations = {
        [mruv.inicialPosition]: () => {
        const {v_0, a, t, x} = data;
        if(v_0 == undefined || a == undefined || t == undefined || x == undefined){
            return null;
        }
        data.x_0 = inicialPosition(v_0, a, t, x);
        return data.x_0;
        },
        [mruv.inicialVelocity]: () => {
        const {x_0, a, t, x} = data;
        if(x_0 == undefined || a == undefined || t == undefined || x == undefined){
            return null;
        }
        data.v_0 = inicialVelocity(x_0, a, t, x);
        return data.v_0;
        },
        [mruv.aceleration]: () => {
        const {x_0, v_0, t, x} = data;
        if(x_0 == undefined || v_0 == undefined || t == undefined || x == undefined){
            return null;
        }
        data.a = aceleration(x_0, v_0, t, x);
        return data.a;
        },
        [mruv.time]: () => {
        const {x_0, v_0, a, x} = data;
        if(x_0 == undefined || v_0 == undefined || a == undefined || x == undefined){
            return null;
        }

        const t = time(x_0, v_0, a, x);
        data.t = t[0];
        return t;
        },
        [mruv.position]: () => {
        const {x_0, v_0, a, t} = data;

        if(x_0 == undefined || v_0 == undefined || a == undefined || t == undefined){
            return null;
        }
        data.x = position(x_0, v_0, a, t);
        return data.x;
        },
    };

    return equations[type]();
};

export function positionOverTime(data:{
    x_0:number // posição inicial
    v_0:number // velocidade inicial
    a:number // aceleração
    t_0:number //tempo inicial
    t_f:number //tempo final
    tIncrement:number //incrmento do tempo
}){
    const result:{time:number, position:number}[] = [];
    for(let t = data.t_0; t <= data.t_f; t+=data.tIncrement){
        result.push({time:t, position:position(data.x_0, data.v_0, data.a, t)});
    }

    return result;
}

export function velocityOverTime(data:{
    v_0:number // velocidade inicial
    a:number // aceleração
    t_0:number //tempo inicial
    t_f:number //tempo final
    tIncrement:number //incrmento do tempo
}){
    const result:{time:number, velocity:number}[] = [];
    for(let t = 0; t <= (data.t_f-data.t_0); t+=data.tIncrement){
        result.push({time:t, velocity: (data.v_0+data.a*t)});
    }

    return result;
}

export function timeOverVelocity(data:{
    v_0:number // velocidade inicial
    v_f:number // velocidade final
    a:number // aceleração
    vIncrement:number // incremento da velocidade
}){
    const result:{velocity:number, time:number}[] = [];
    for(let v = data.v_0; v <= data.v_f; v+=data.vIncrement){
        console.log(v);
        result.push({velocity:v, time:(v-data.v_0)/data.a})
    }

    return result;
}

export function inicialPosition(v_0:number,
    a:number,
    t:number,
    x:number){
    return x - v_0*t - 0.5*a*(t**2);
};
export function inicialVelocity(x_0:number,
    a:number,
    t:number,
    x:number){
    return (x-x_0)/t - 0.5*a*t;
};
export function aceleration(x_0:number,
    v_0:number,
    t:number,
    x:number){
    return 2*(x - x_0 - v_0*t)/(t**2);
};
export function time(x_0:number,
    v_0:number,
    a:number,
    x:number){
    const delta = Math.sqrt(v_0**2 - 4*(x_0-x)*(0.5*a));
    return [
        (-v_0+delta)/a,
        (-v_0-delta)/a,
    ];
};
export function position(x_0:number,
    v_0:number,
    a:number,
    t:number){
    return x_0 + v_0*t + 0.5*a*(t**2);
};