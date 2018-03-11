const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
    
    if(emails.trim().slice(-1) === ","){
        return `Please to not leave trailing commas on the list`;
    }

    const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => email !== "" && re.test(email) === false);
        
        if(invalidEmails.length) {
            return `These emails are invalid: ${invalidEmails}`;
        }

        return undefined;
};