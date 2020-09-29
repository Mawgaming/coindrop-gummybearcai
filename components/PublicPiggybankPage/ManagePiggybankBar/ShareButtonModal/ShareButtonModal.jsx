import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import {
    Button,
    Flex,
    Box,
    Image,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Text,
    Heading,
    Switch,
    Icon,
    Link,
    useClipboard,
} from '@chakra-ui/core';
import CopyLinkShareButton from '../../../Buttons/CopyLinkShareButton';
import styles from '../../../../src/embed-button/embed-button.module.css'

const EmbedButtonPngPreview = () => (
    <Link href="#">
        <Image src="/embed-button.png" />
    </Link>
);

// copy pasted from src/embed-button/embed-button.js. Ideally wouldnt exist in 2 places.
const svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 166c0-8.291-6.709-15-15-15s-15 6.709-15 15c0 5.284-1.082 10.285-2.763 15-6.213-17.422-22.707-30-42.237-30-24.814 0-45 20.186-45 45s20.186 45 45 45a45.1 45.1 0 009.062-.917c1.185-.145 2.406-.161 3.572-.361C443.791 257.8 425.999 271 406 271h-3.604c-8.291 0-15 6.709-15 15s6.709 15 15 15H406c41.353 0 76-33.647 76-75v-.383c18.104-13.705 30-35.213 30-59.617zm-75 15c8.276 0 15 6.724 15 15s-6.724 15-15 15-15-6.724-15-15 6.724-15 15-15z" fill="#cf4529"/><path d="M226 152c-28.2 0-55.499 5.099-81.301 15.3-41.698-32.4-101.499-29.401-139.6 8.399-5.7 6-5.7 15.3 0 21.301L51.3 243.199c-6 9.901-10.801 19.501-14.101 29.399C16.199 276.499 0 294.8 0 317v30c0 24.899 20.099 45 45 45h6.599c9.901 16.199 23.8 31.199 39.401 43.799V497c0 8.399 6.599 15 15 15h60c8.401 0 15-6.601 15-15v-19.501C196 480.5 211 482 226 482s30-1.5 45-4.501V497c0 8.399 6.599 15 15 15h60c8.401 0 15-6.601 15-15v-61.201C399.101 404.9 421 362 421 317c0-90.901-87.599-165-195-165z" fill="#ec7838"/><path d="M421 317c0 45-21.899 87.9-60 118.799V497c0 8.399-6.599 15-15 15h-60c-8.401 0-15-6.601-15-15v-19.501C256 480.5 241 482 226 482V152c107.401 0 195 74.099 195 165z" fill="#db632c"/><path d="M105.854 301.293c-8.291 0-15.146-6.855-15.146-15.146S97.563 271 105.854 271 121 277.855 121 286.146s-6.855 15.147-15.146 15.147zm14.853-15.147H121h-.293zm-14.853 0h.293-.293z" fill="#5c5f66"/><path d="M286.601 237.7c-2.701 8.099-11.1 12.299-18.9 9.899-13.5-4.2-27.601-6.599-41.7-6.599s-28.2 2.399-41.7 6.599c-7.8 2.401-16.199-1.8-18.9-9.899-2.399-7.8 1.8-16.201 9.901-18.9 16.199-5.402 33.3-7.8 50.7-7.8s34.501 2.399 50.7 7.8c8.099 2.699 12.297 11.1 9.899 18.9z" fill="#8c5731"/><path d="M226 150c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75-33.647 75-75 75z" fill="#ffde33"/><path d="M286.601 237.7c-2.701 8.099-11.1 12.299-18.9 9.899-13.5-4.2-27.601-6.599-41.7-6.599v-30c17.401 0 34.501 2.399 50.7 7.8 8.1 2.699 12.298 11.1 9.9 18.9z" fill="#804426"/><path d="M301 75c0-41.353-33.647-75-75-75v150c41.353 0 75-33.647 75-75z" fill="#ffbc33"/></svg>;

const EmbedButtonModal = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { query: { piggybankName }} = useRouter();
    const [showUrl, setShowUrl] = useState(true);
    const publicUrl = `coindrop.to/${piggybankName}`;
    const scriptButtonHtml = `<script type="text/javascript" src="/embed-button.js" data-id="coindrop-button" data-slug="${showUrl ? piggybankName : ''}" ></script>`;
    const imageButtonHtml = `<a href="https://coindrop.to/" target="_blank"><img src="https://coindrop.to/embed-button.png" alt="Coindrop me" style="height: 57px !important;width: 185px !important;" ></a>`;
    const { onCopy: onCopyScript, hasCopied: hasCopiedScript } = useClipboard(scriptButtonHtml);
    const { onCopy: onCopyImage, hasCopied: hasCopiedImage } = useClipboard(imageButtonHtml);
    const ButtonHtmlPreview = () => (
        <a href={`https://coindrop.to/${piggybankName}`} target="_blank" rel="noreferrer">
            <button type="button" className={styles["coindrop-button"]}>
                <div className={styles["coindrop-button-content"]}>
                <div className={styles["coindrop-svg"]}>{svg}</div>
                <div>{showUrl ? `coindrop.to/${piggybankName}` : 'coindrop me'}</div>
                </div>
            </button>
        </a>
    );
    return (
        <>
        <Button
            leftIcon="share"
            onClick={onOpen}
            variantColor="green"
        >
            Share
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <Heading
                    my={4}
                >
                    <Flex align="center" justify="center">
                        <Icon name="share" mr={2} />
                        Share

                    </Flex>
                </Heading>
                <ModalBody>
                    <Flex align="center" justify="center" border="1px solid red">
                        <Box textAlign="center">
                            <CopyLinkShareButton textToCopy={publicUrl} />
                        </Box>
                        <Text mx={3}>or</Text>
                        <Box textAlign="center">
                            <Button
                                leftIcon="sourceCode"
                            >
                                Embed Button
                            </Button>
                        </Box>
                    </Flex>
                    <Flex justify="center">
                        <Text>Show URL</Text>
                        <Switch
                            name="showUrl"
                            value={showUrl}
                            defaultIsChecked
                            onChange={() => setShowUrl(!showUrl)}
                        />
                    </Flex>
                    <Box align="center">
                        <ButtonHtmlPreview />
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    );
};

EmbedButtonModal.propTypes = {

};

EmbedButtonModal.defaultProps = {

};

export default EmbedButtonModal;
