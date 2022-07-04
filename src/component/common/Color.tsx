import { COLOR } from '../../constant/common';

//color component
function Color() {
    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                {
                    COLOR.map((key) => {
                        return (
                            <img className='color-list' src={key.img}  alt='color-list'>
                            </img>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Color;

