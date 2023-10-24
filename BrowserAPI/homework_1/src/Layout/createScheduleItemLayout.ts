import { IClass } from '../types/IClass';

export const createScheduleItemLayout = ({
                                           id,
                                           name,
                                           time_start,
                                           duration,
                                           max_users,
                                           current_users
                                         }: IClass) => `<div class="p-2 bg-light border schedule__item" id="key-${id}">
<p class="fs-3">${name}</p>
<p class="fs-5">Start Time: <span class="font-monospace">${new Date(time_start).toLocaleString()}</span></p>
<p class="fs-5">Duration: <span class="font-monospace">${duration}</span></p>
<p class="fs-5">Users: <span class="font-monospace">${current_users}</span> / <span class="font-monospace">${max_users}</span></p>
<button type="button" class="btn btn-primary">Sign Up for Class</button>
</div>`;

