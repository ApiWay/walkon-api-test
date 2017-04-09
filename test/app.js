var assert = require('assert');
var apigClientFactory = require('aws-api-gateway-client')

config = {invokeUrl: 'https://pbk06nhs6b.execute-api.ap-northeast-2.amazonaws.com/dev'};
var apigClient = apigClientFactory.newClient(config);


describe('App', function() {
    describe('/app/version', function() {
        var params = {
        };
        var pathTemplate = '/app/version';
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

        it('http status 200 check', function(done) {
            apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
                .then(function (result) {
                    // assert.equal("3EF2E603F15B4DF6ACC12A0D5D34AF0F", result.data.id);
                    responseData = result.data;
                    // console.log(result);
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
        it('version check', function(done) {
            assert(responseData.data.version != null);
            console.log(responseData.data.version)
            done();
        });
    });
    describe('/app/notice', function() {
        var params = {
        };
        var pathTemplate = '/app/notice';
        var method = 'POST';
        var additionalParams = {
            headers: {
                "Authorization": "test@8EF83BB6D7F446D192F1DDA5919B8438"
            },
            queryParams: {
            }
        };
        var body = {
            limit: 10,
            offset: 0
        };

        var responseData;

        it('http status 200 check', function(done) {
            apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
                .then(function (result) {
                    // assert.equal("3EF2E603F15B4DF6ACC12A0D5D34AF0F", result.data.id);
                    responseData = result.data;
                    // console.log(result);
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
        it('data.notices null check', function(done) {
            assert(responseData.data.notices != null);
            console.log(responseData.data.notices);
            done();
        });
        it('data.notices size check', function(done) {
            assert(responseData.data.notices.length > 0);
            console.log(responseData.data.notices);
            done();
        });
    });
    describe('/app/terms', function() {
        var params = {
        };
        var pathTemplate = '/app/terms';
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

        it('http status 200 check', function(done) {
            apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
                .then(function (result) {
                    // assert.equal("3EF2E603F15B4DF6ACC12A0D5D34AF0F", result.data.id);
                    responseData = result.data;
                    // console.log(result);
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
        it('data.terms null check', function(done) {
            assert(responseData.data.terms!= null);
            console.log(responseData.data.terms);
            done();
        });
        it('data.terms size check', function(done) {
            assert(responseData.data.terms.length > 0);
            console.log(responseData.data.terms);
            done();
        });
    });
    describe('/app/notice/popup', function() {
        var params = {
        };
        var pathTemplate = '/app/notice/popup';
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

        it('http status 200 check', function(done) {
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
        it('data null check', function(done) {
            assert(responseData.data != null);
            console.log(responseData.data);
            done();
        });
        it('data.popup null check', function(done) {
            assert(responseData.data.popup!= null);
            console.log(responseData.data.popup);
            done();
        });
        it('data.popup size check', function(done) {
            assert(responseData.data.popup.length > 0);
            console.log(responseData.popup.terms);
            done();
        });
    });
    describe('/app/action/log', function() {
        var params = {
        };
        var pathTemplate = '/app/action/log';
        var method = 'POST';
        var additionalParams = {
            headers: {
                "Authorization": "test@8EF83BB6D7F446D192F1DDA5919B8438"
            },
            queryParams: {
            }
        };
        var body = {
            log: [
                {
                    ty : 0,
                    id : "event-id",
                    ct : 10,
                    st : 1483018800,
                    et : 1483398000,
                    ex : null
                }
                ]
        };

        var responseData;

        it('http status 200 check', function(done) {
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
    });
    describe('/app/feedback/upload', function() {
        var params = {
        };
        var pathTemplate = '/app/feedback/upload';
        var method = 'POST';
        var additionalParams = {
            headers: {
                "Authorization": "test@8EF83BB6D7F446D192F1DDA5919B8438"
            },
            queryParams: {
            }
        };
        var body = {
            note: "test-feedback"
        };

        var responseData;

        it('http status 200 check', function(done) {
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
    });
    describe('/app/ping', function() {
        var params = {
        };
        var pathTemplate = '/app/ping';
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
        var httpResult;

        it('http status 200 check', function(done) {
            apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
                .then(function (result) {
                    responseData = result.data;
                    httpResult = result;
                    assert.equal(200, result.status);
                    console.log(responseData);
                    done();
                }).catch(function (result) {
                console.log(result);
                done('error');
            });
        });
        it('Read date from http header', function(done) {
            assert(httpResult.headers.date != null);
            console.log(httpResult.headers.date);
            done();
        });
    });
});
