function solve(arr, startFlavour, endFlavour) {

   const start = arr.indexOf(startFlavour);
   const end = arr.indexOf(endFlavour) + 1;

   const res = arr.slice(start, end);

   return res;

}solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')