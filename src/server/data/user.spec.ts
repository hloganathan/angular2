'use strict';
import { User } from './user';

describe('User Tests', () => {

beforeEach(() => [User]);

    it('has correct username', () => {
        // Arrange
        let cut = new User();

        // Act
        cut.username = 'fsmith';

        // Assert
        expect(cut.username).toEqual('fsmith');
    });

    it('properly erases identity', () => {
        // Arrange
        let cut = new User();
        cut.id = 8;
        cut.username = 'username';
        cut.lastname = 'lastname';
        cut.firstname = 'firstname';
        cut.password = 'password';

        // Act
        cut.EraseIdentity();

        // Assert
        expect(cut.id).toEqual(0);
        expect(cut.username).toEqual('');
        expect(cut.lastname).toEqual('');
        expect(cut.firstname).toEqual('');
        expect(cut.password).toEqual('');
    });

    it('properly calculates display name', () => {
        // Arrange
        let cut = new User();
        cut.firstname = 'George';
        cut.lastname = 'Washington';

        // Act
        var displayname = cut.DisplayName();

        // Assert
        expect(displayname).toEqual('George Washington');
    });

});