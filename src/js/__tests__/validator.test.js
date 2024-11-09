import Validator from '../validator';

test('should wrong nickname', () => {

    expect((new Validator('_nickname_')).validateUsername()).toBe(false);
    expect((new Validator('123nickname789')).validateUsername()).toBe(false);
    expect((new Validator('-nickname-')).validateUsername()).toBe(false);
    expect((new Validator('nickname_')).validateUsername()).toBe(false);
    expect((new Validator('nickname789')).validateUsername()).toBe(false);
    expect((new Validator('nickname-')).validateUsername()).toBe(false);
    expect((new Validator('_nickname')).validateUsername()).toBe(false);
    expect((new Validator('123nickname')).validateUsername()).toBe(false);
    expect((new Validator('-nickname')).validateUsername()).toBe(false);
    expect((new Validator('Бnickname')).validateUsername()).toBe(false);
})

test('should wright nickname', () => {

    expect((new Validator('nickname')).validateUsername()).toBe(true);
    expect((new Validator('nick-name')).validateUsername()).toBe(true);
    expect((new Validator('nick_name')).validateUsername()).toBe(true);
    expect((new Validator('nick123name')).validateUsername()).toBe(true);
})