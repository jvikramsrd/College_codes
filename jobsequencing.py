def js(jobs):
    jobs.sort(key=lambda x: x[2],reverse=True)

    max_deadlines=max(job[1] for job in jobs)
    slots=[-1]*(max_deadlines+1)
    t_profit=0

    for jid,deadline,profit in jobs:
        for i in range(deadline,0,-1):
            if slots[i]==-1:
                slots[i]=jid
                t_profit+=profit
                break

    return [job for job in slots if job!=-1],t_profit

jbs=[('J1', 2, 100), ('J2', 1, 19), ('J3', 2, 27)]

print(js(jbs))
