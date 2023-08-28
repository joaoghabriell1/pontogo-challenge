import { List, ListItem, Image, Link } from "@chakra-ui/react";
import IgIcon from "../../../../assets/icon-ig.png";
import fbIcon from "../../../../assets/icon-fb.png";
import linkedInIcon from "../../../../assets/icon-linkedin.png";
const SocialNav = () => {
  return (
    <>
      <nav>
        <List justifyContent="center" display="flex" gap="2.5rem">
          <ListItem>
            <a href="http://www.instagram.com" target="_blank">
              <Image src={IgIcon} />
            </a>
          </ListItem>
          <ListItem>
            <a href="http://www.facebook.com" target="_blank">
              <Image src={fbIcon} />
            </a>
          </ListItem>
          <ListItem>
            <a href="http://www.linkedin.com" target="_blank">
              <Image src={linkedInIcon} />
            </a>
          </ListItem>
        </List>
      </nav>
    </>
  );
};

export default SocialNav;
