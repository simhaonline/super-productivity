'use strict';

describe('Directive: doneTasksBacklog', function() {

    // load the directive's module
    beforeEach(module('superProductivity'));
    beforeEach(module('templates'));

    var element,
        scope;

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should do something', inject(function($compile) {
        element = $compile('<done-tasks-backlog></done-tasks-backlog>')(scope);
        scope.$digest();
        expect(true).toBe(true);
    }));
});