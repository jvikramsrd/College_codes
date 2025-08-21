def min_max(arr,low,high):
    if low==high:
        return arr[low],arr[low]
    if high==low+1:
        if arr[low]<arr[high]:
            return arr[low],arr[high]

        else:
            return arr[high],arr[low]

    mid=(low+high)//2
    min1,max1=min_max(arr,low,mid)
    min2,max2=min_max(arr,mid+1,high)
    return min(min1,min2),max(max1,max2)


my_list = [10, 5, 25, 8, 30, 15, 6, 22]
min_val, max_val=min_max(my_list, 0, len(my_list)-1)
print(f"List: {my_list}\nMin: {min_val}, Max: {max_val}")
