import AwsAccess from './AwsAccess';

const { apiPath } = AwsAccess;

const AwsAPIs = {
    sendEmailAPI: () => `${apiPath}/`,
};

export default AwsAPIs;
