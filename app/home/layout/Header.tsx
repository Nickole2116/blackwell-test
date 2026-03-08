import Image from "next/image";
import Icon from "@mdi/react";
import Button from "@/app/components/shared/Button";
import { mdiGoogle, mdiFacebook, mdiAccount } from "@mdi/js"


export default function Header() {

    return <>
        <nav className="fixed top-0 left-0 w-full z-50 head">
            <div className="container mx-auto px-4 flex items-center justify-between">
                    <div className="left-side">
                        <Image src="/blackwell/blackwelllogo3-1.png" alt="Logo" className="logo" width={150} height={100} />
                    </div>
                    <div className="center-side">
                        <div className="countdown-label">
                            <span>Promotion <br/>Ends In</span>
                        </div>
                        <div className="countdown">
                            <div className="countdown-item">
                                <span className="value">10</span>
                                <span className="label">Days</span>
                            </div>
                            <div className="countdown-separator">
                                :
                            </div>
                            <div className="countdown-item">
                                <span className="value">10</span>
                                <span className="label">Hours</span>
                            </div>
                            <div className="countdown-separator">
                                :
                            </div>
                            <div className="countdown-item">
                                <span className="value">10</span>
                                <span className="label">Minutes</span>
                            </div>
                            <div className="countdown-separator">
                                :
                            </div>
                            <div className="countdown-item">
                                <span className="value">10</span>
                                <span className="label">Seconds</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        <Button popover="Sign Up Now">
                            Register Now
                        </Button>
                        <Button variant="icon" popover="Login Here">
                            <Icon path={mdiAccount} size={1} className="thumbnail" />
                        </Button>
                    </div>
            </div>
        </nav>
    </>
}