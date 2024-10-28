// to remain empty until such a time where we support Unified as a vendor

module.exports = {
    getJob: (id) => {
        // Vendor A specific code
        const options = {
            method: 'GET',
            url: 'https://api.unified.to/ats/5de520f96e439b002043d8dc/job/5de520f96e439b002043d8d8',
            headers: {
              authorization: 'bearer .....'
            }
          };
          
          fetch(options.url, options)
          .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    return data;
                });

         
    },
 
    getAllJobs: () => {
        // Vendor A specific code
        return 'Data from Vendor A';
    },
 
    sendResume: () => {
        // Vendor A specific code
        return 'Data from Vendor A';
    },
 
    checkApplyStatus: () => {
        // Vendor A specific code
        return 'Data from Vendor A';
    },
 
    apply: () => {
        // Vendor A specific code
        return 'Data from Vendor A';
    }
};
