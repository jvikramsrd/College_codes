def mergesort(arr):
    if len(arr)==1:
        return arr

    mid=len(arr)//2
    left=mergesort(arr[:mid])
    right=mergesort(arr[mid:])

    i=j=0
    sorted_arr=[]
    while i<len(left) and j<len(right):
        if left[i]<right[j]:
            sorted_arr.append(left[i])
            i+=1
        else:
            sorted_arr.append(right[j])
            j+=1

    sorted_arr.extend(left[i:])
    sorted_arr.extend(right[j:])

    return sorted_arr

my_list = [12, 11, 13, 5, 6, 7]
sorted_list = mergesort(my_list)
print(f"Original: {my_list}\nSorted: {sorted_list}")
