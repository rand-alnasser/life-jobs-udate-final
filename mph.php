    <?php
    if ($_POST['submit']) {

    	$server_name="localhost";
    	$user_Name="root";
    	$password="";
    	$db_name="cv"; 
    	$connection = new mysqli($server_name,$user_Name,$password,$db_name) or die("Connect failed: %s\n". $connection -> error);
    	    
            $fullname=  $_POST['full-name'];
            $day=  $_POST['day'];
            $month=  $_POST['month'];
            $year = $_POST['year'];
            $Status=  $_POST['marital-status'];
            $edu=  $_POST['university-degree'];
            $Job=  $_POST['current-job-title'];
            $exp=  $_POST['current-employer'];
            $Email=  $_POST['email'];
            $Phone = $_POST['phone'];
            $cvfile=  $_POST['resume'];
    $sql = "INSERT INTO cv_data  VALUES 
    ('$fullname','$day','$month','$year','$Status','$edu','$Job','$exp','$Email','$Phone','$cvfile')";
            if(mysqli_query($connection, $sql)){
                
                
                
                ?>
                <script type="text/javascript">
                
                //showPopup();
                swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                  });
                  </script>

                  <?php 
                 
                 header('Location: cv.html');
                 
                /*echo nl2br("\n $fullname  \n $day \n $month \n $year \n $Status \n $edu \n $Job \n $exp \n $Email \n $Phone \n $cvfile");*/
            } else{
                echo "ERROR $sql. "
                    . mysqli_error($connection);
            }
       
            // Close connection
            mysqli_close($connection);
        }
    ?>