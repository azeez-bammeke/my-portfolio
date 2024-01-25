import SocialProfiles from "./SocialProfiles";
import {render} from "react-dom";


describe(SocialProfiles,  () => {
    it('should test this',  () => {
        const { getElementsByClassName } = render(<SocialProfiles/>);
    });
});

