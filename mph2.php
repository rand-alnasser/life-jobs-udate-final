    <?php
    	$server_name="localhost";
    	$user_Name="root";
    	$password="";
    	$db_name="cv"; 
    	$connection = new mysqli($server_name,$user_Name,$password,$db_name) or die("Connect failed: %s\n". $connection -> error);
    	    
            $com_name=  $_POST['Company-name'];
            $email=  $_POST['email'];
            $phone = $_POST['phone'];
            $emp_num=  $_POST['employees-required'];
            $locat=  $_POST['location'];
            $req_qua=  $_POST['university-degree'];
            $req_exp=  $_POST['required-experiences'];
            $comfile=  $_POST['resume'];
    $sql = "INSERT INTO com_data  VALUES 
    ('$com_name','$email','$phone','$emp_num','$locat','$req_qua','$req_exp','$comfile')";
            if(mysqli_query($connection, $sql)){
                
                ?>
                <script type="text/javascript">
                //showPopup();
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                  });
                  </script>

                  <?php 
                  header('Location: companies.html');
                
                 
                /*echo nl2br("\n $fullname  \n $day \n $month \n $year \n $Status \n $edu \n $Job \n $exp \n $Email \n $Phone \n $cvfile");*/
            } else{
                echo "ERROR $sql. "
                    . mysqli_error($connection);
            }
       
            // Close connection
            mysqli_close($connection);
    ?>