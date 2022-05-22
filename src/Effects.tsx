import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [mess, setmess] = useState(-1);
    const callBack = (message: number) => {
        return setmess(message);
    };
    useEffect(() => {
        subscribe(props.sourceId, callBack);
        setmess(-1);
        return () => {
            unsubscribe(props.sourceId, callBack);
        };
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {mess}
        </div>
    );
}
