"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCode = void 0;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["CONTINUE"] = 100] = "CONTINUE";
    StatusCode[StatusCode["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    StatusCode[StatusCode["PROCESSING"] = 102] = "PROCESSING";
    StatusCode[StatusCode["EARLYHINTS"] = 103] = "EARLYHINTS";
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["CREATED"] = 201] = "CREATED";
    StatusCode[StatusCode["ACCEPTED"] = 202] = "ACCEPTED";
    StatusCode[StatusCode["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    StatusCode[StatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    StatusCode[StatusCode["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    StatusCode[StatusCode["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    StatusCode[StatusCode["AMBIGUOUS"] = 300] = "AMBIGUOUS";
    StatusCode[StatusCode["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    StatusCode[StatusCode["FOUND"] = 302] = "FOUND";
    StatusCode[StatusCode["SEE_OTHER"] = 303] = "SEE_OTHER";
    StatusCode[StatusCode["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    StatusCode[StatusCode["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    StatusCode[StatusCode["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    StatusCode[StatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCode[StatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusCode[StatusCode["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    StatusCode[StatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    StatusCode[StatusCode["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    StatusCode[StatusCode["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    StatusCode[StatusCode["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    StatusCode[StatusCode["CONFLICT"] = 409] = "CONFLICT";
    StatusCode[StatusCode["GONE"] = 410] = "GONE";
    StatusCode[StatusCode["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    StatusCode[StatusCode["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    StatusCode[StatusCode["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    StatusCode[StatusCode["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    StatusCode[StatusCode["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    StatusCode[StatusCode["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    StatusCode[StatusCode["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    StatusCode[StatusCode["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
    StatusCode[StatusCode["MISDIRECTED"] = 421] = "MISDIRECTED";
    StatusCode[StatusCode["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    StatusCode[StatusCode["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    StatusCode[StatusCode["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    StatusCode[StatusCode["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    StatusCode[StatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    StatusCode[StatusCode["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    StatusCode[StatusCode["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    StatusCode[StatusCode["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    StatusCode[StatusCode["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    StatusCode[StatusCode["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
})(StatusCode || (exports.StatusCode = StatusCode = {}));
