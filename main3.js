/* 

Алгоритм для решения третей задачи:
1. Мы генерируем точку 'r' в трех плоскостях x,y,z
2. Вторую точку 'a' задает пользователь вручную, путем введения кооринат x,y,z в промежутке от 0 до 100
3. Мы создадим фунцию, которая будет сравнивать кординаты по трем осям нашей рандомной точки 'r' и точки 'a'
4. Алгоритм будет по каждой из трех осей, мы вычитаем значение distance[x] = r[x] - a[x] и записываем модуль числа |distance[x]|
5. 

к примеру: х1=10 х2=50 ... х3=10-50=-40=40
            х1=40 х2=10 ... х3=40-10=30

            нужно придумать как нам двигать от координат нашей точки, до координат искомой случайно сгенерированой точки

Я предлагаю, что мы дистанцию делим на два и повторям в цикле, когда координаты первой и второй точки равны, то мы нашли искомую точку

х1=8 х2=9 ... 8-9=-1=1

остаток от деления мы каждый раз просто отбрасываем, именно отбрасываем, а не откугляем

ну да, все будет работать:
8-9=-1=1 получается, что мы отнимаем половину от большего = 9-0,5 = 8,5 ...отбрасываем десятичные, и получаем искомые результат, посчитали операции, все готово!

НЕЕЕЕ, знак важен при сравлении, он там будет указывать отмнимаем мы половину от значения нашей координаты или прибавляем?

Ну вот, все написано, может потом еще как можно будет оптимизировать, в целом, это что первое пришло на ум, и будет работать быстрее чем просто перебор по одному значению


*/
