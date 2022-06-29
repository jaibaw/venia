import { COLOR } from '../../constant/common';

function Color() {
    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                {
                    COLOR.map((key) => {
                        return (
                            <img className='side-product-display' src={key.img}>
                            </img>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Color;

