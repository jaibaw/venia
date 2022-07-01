import { COLOR } from '../../constant/common';

function Color() {
    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                {
                    COLOR.map((key) => {
                        return (
                            <img className='color-list' src={key.img}>
                            </img>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Color;

