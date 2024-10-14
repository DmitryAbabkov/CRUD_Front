import React, {FC} from 'react';

interface IProps {
    update: () => void
}

const Update: FC<IProps> = ({update}) => {
    return (
        <>
            <h2>Notes</h2>
            <span onClick={update} className='icon_update'>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                 x="0px" y="0px" viewBox="0 0 28 28"><g><g id="reload"><g><path
                d="M22,16c0,4.41-3.586,8-8,8s-8-3.59-8-8s3.586-8,8-8l2.359,0.027l-1.164,1.164l2.828,2.828 L24.035,6l-6.012-6l-2.828,2.828L16.375,4H14C7.375,4,2,9.371,2,16s5.375,12,12,12s12-5.371,12-12H22z"/></g></g></g></svg>
        </span>
        </>
    );
}

export default Update;
