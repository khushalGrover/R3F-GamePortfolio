import React from "react";
import { EcctrlJoystick } from 'ecctrl'

const Overlay = () => {
	return (
		<>
            {/* Desktop Controls Overlay*/}
			<div className="absolute bottom-0 left-0 z-10 invisible md:visible">
				<img
					src="./images/keyControls.png"
					alt="Image"
					className="m-5 h-[70px]"
				/>
				
			</div>

            {/* Mobile JoyStick Overlay */}
			<div className="visible md:invisible">
				<EcctrlJoystick />
			</div>
		</>
	);
};

export default Overlay;
