var assert = require('assert');
var apigClientFactory = require('aws-api-gateway-client')

config = {invokeUrl: 'https://pbk06nhs6b.execute-api.ap-northeast-2.amazonaws.com/dev'};
var apigClient = apigClientFactory.newClient(config);

var signupId;
var token;

describe('User', function() {
    describe('/user/signup/sms', function() {
        var params = {
            phoneno: '+821096884835',
            isoCode: "KR"
        };
        var pathTemplate = '/user/signup/sms';
        var method = 'POST';
        var additionalParams = {
            headers: {
            },
            queryParams: {
            }
        };
        var body = {
            'phoneno': '+821096884835',
            'isoCode': "KR"
        };

        var responseData;

        it('http status 200 check', function(done) {
            apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
                .then(function (result) {
                    // assert.equal("3EF2E603F15B4DF6ACC12A0D5D34AF0F", result.data.id);
                    responseData = result.data;
                    assert.equal(200, result.status);
                    console.log(responseData);
                    done();
                }).catch(function (result) {
                console.log(result);
                done('error');
            });
        });
        it('data null check', function(done) {
            assert(responseData.data != null);
            console.log(responseData.data);
            done();
        });
        it('id check', function(done) {
            assert(responseData.data.id != null);
            console.log(responseData.data)
            signupId = responseData.data.id;
            console.log(responseData.data.id);
            done();
        });
    });
    describe('/user/signup/sms/apply', function() {
        var params = {
        };
        var pathTemplate = '/user/signup/sms/apply';
        var method = 'POST';
        var additionalParams = {
            headers: {
            },
            queryParams: {
            }
        };
        var body = {
            id: "9DBD7C6D35C9459787B67D0D22D0584C",
            code: 3117
        };

        var responseData;
        it('data null check', function(done) {
            console.log(body);
            apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
                .then(function (result) {
                    responseData = result.data;
                    assert.equal(200, result.status);
                    console.log(responseData);
                    assert(responseData.data != null);
                    console.log(responseData.data);
                    done();
                }).catch(function (result) {
                console.log(result);
                done('error');
            });
        });
        it('result code check', function(done) {
            assert.equal(responseData.resultCode, 0);
            console.log(responseData.resultCode);
            done();
        });
        it('token check', function(done) {
            assert(responseData.data.token != null);
            token = responseData.data.token;
            console.log(responseData.data.token);
            done();
        });
    });
    describe('/user/login/phoneno', function() {
        var params = {
        };
        var pathTemplate = '/user/login/phoneno';
        var method = 'POST';
        var additionalParams = {
            headers: {
            },
            queryParams: {
            }
        };
        var body = {
            id: "9DBD7C6D35C9459787B67D0D22D0584C",
            phoneno: '+821096884835',
            isoCode: "KR",
        };

        var responseData;
        it('data null check', function(done) {
            console.log(body);
            apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
                .then(function (result) {
                    responseData = result.data;
                    assert.equal(200, result.status);
                    console.log(responseData);
                    assert(responseData.data != null);
                    console.log(responseData.data);
                    done();
                }).catch(function (result) {
                console.log(result);
                done('error');
            });
        });
        it('result code check', function(done) {
            assert.equal(responseData.resultCode, 0);
            console.log(responseData.resultCode);
            done();
        });
        it('data null check', function(done) {
            assert(responseData.data != null);
            console.log(responseData.data);
            done();
        });
        it('token check', function(done) {
            assert(responseData.data.token != null);
            console.log(responseData.data.token);
            done();
        });
    });
    describe('/user/update', function() {
        var params = {
        };
        var pathTemplate = '/user/update';
        var method = 'POST';
        var additionalParams = {
            headers: {
                "Authorization": "test@8EF83BB6D7F446D192F1DDA5919B8438"
            },
            queryParams: {
            }
        };

        var responseData;
        it('http status check', function(done) {
            var body = {
                name : "bluehack",
                gender : 0,
                birth : 1483018800,
                height : 180,
                weight : 70
            };
            console.log(body);
            apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
                .then(function (result) {
                    responseData = result.data;
                    assert.equal(200, result.status);
                    console.log(responseData);
                    done();
                }).catch(function (result) {
                console.log(result);
                done('error');
            });
        });
        it('result code check', function(done) {
            console.log(responseData);
            assert.equal(responseData.resultCode, 0);
            console.log(responseData.resultCode);
            done();
        });
        it('change hidestep', function(done) {
            var body = {
                name : "bluehack",
                gender : 0,
                birth : 1483018800,
                height : 180,
                weight : 70,
                hideStep: 0
            };
            console.log(body);
            apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
                .then(function (result) {
                    responseData = result.data;
                    assert.equal(200, result.status);
                    assert("Internal Server Error" != result.data);
                    console.log(responseData);
                    done();
                }).catch(function (result) {
                console.log(result);
                done('error');
            });
        });
    });
    describe('/user', function() {
        var params = {
        };
        var pathTemplate = '/user';
        var method = 'POST';
        var additionalParams = {
            headers: {
                "Authorization": "test@8EF83BB6D7F446D192F1DDA5919B8438"
            },
            queryParams: {
            }
        };

        var body = {
        };

        var responseData;
        it('http status check', function(done) {
            apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
                .then(function (result) {
                    responseData = result.data;
                    assert.equal(200, result.status);
                    // console.log(responseData);
                    done();
                }).catch(function (result) {
                console.log(result);
                done('error');
            });
        });
        it('result code check', function(done) {
            // console.log(responseData);
            assert.equal(responseData.resultCode, 0);
            console.log(responseData.resultCode);
            done();
        });
        it('data null check', function(done) {
            apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
                .then(function (result) {
                    responseData = result.data;
                    console.log(responseData.data);
                    assert(responseData.data != null);
                    done();
                }).catch(function (result) {
                console.log(result);
                done('error');
            });
        });
        it('data.name null check', function(done) {
            apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
                .then(function (result) {
                    assert(responseData.data.name != null);
                    console.log(responseData.data.name);
                    done();
                }).catch(function (result) {
                console.log(result);
                done('error');
            });
        });
        it('data.profile null check', function(done) {
            apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
                .then(function (result) {
                    assert(responseData.data.profile!= null);
                    console.log(responseData.data.profile);
                    done();
                }).catch(function (result) {
                console.log(result);
                done('error');
            });
        });
    });
    describe('/user', function() {
        var params = {
        };
        var pathTemplate = '/user';
        var method = 'POST';
        var additionalParams = {
            headers: {
                "Authorization": "test@8EF83BB6D7F446D192F1DDA5919B8438"
            },
            queryParams: {
            }
        };

        var body = {
        };

        var responseData;
        it('http status check', function(done) {
            apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
                .then(function (result) {
                    responseData = result.data;
                    assert.equal(200, result.status);
                    // console.log(responseData);
                    done();
                }).catch(function (result) {
                console.log(result);
                done('error');
            });
        });
        it('result code check', function(done) {
            // console.log(responseData);
            assert.equal(responseData.resultCode, 0);
            console.log(responseData.resultCode);
            done();
        });
        it('data null check', function(done) {
            console.log(responseData.data);
            assert(responseData.data != null);
            done();
        });
        it('data.name null check', function(done) {
            assert(responseData.data.name != null);
            console.log(responseData.data.name);
            done();
        });
        it('data.profile null check', function(done) {
            assert(responseData.data.profile!= null);
            console.log(responseData.data.profile);
            done();
        });
    });
    describe('/user/stat/week', function() {
        var params = {
        };
        var pathTemplate = '/user/stat/week';
        var method = 'POST';
        var additionalParams = {
            headers: {
                "Authorization": "test@8EF83BB6D7F446D192F1DDA5919B8438"
            },
            queryParams: {
            }
        };

        var body = {
            baseTime: 1483018800
        };

        var responseData;
        it('http status check', function(done) {
            apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
                .then(function (result) {
                    responseData = result.data;
                    assert.equal(200, result.status);
                    // console.log(responseData);
                    done();
                }).catch(function (result) {
                console.log(result);
                done('error');
            });
        });
        it('result code check', function(done) {
            // console.log(responseData);
            assert.equal(responseData.resultCode, 0);
            console.log(responseData.resultCode);
            done();
        });
        it('data null check', function(done) {
            console.log(responseData.data);
            assert(responseData.data != null);
            done();
        });
        it('data.stat null check', function(done) {
            assert(responseData.data.stat != null);
            console.log(responseData.data.stat);
            done();
        });
    });
});

