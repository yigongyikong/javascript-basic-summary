/**
 * 매개변수의 개수는 적을수록 좋다.
 */

$.ajax({
    method: 'POST',
    url: '/user',
    data: { id: 1, name: 'Lee' },
    cache: false
});