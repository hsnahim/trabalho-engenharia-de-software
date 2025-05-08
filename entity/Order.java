package entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Pizza pizza;

    @ManyToOne
    private Drink drink;

    private String deliveryAddress;
    private LocalDate deliveryDate;
    private Double total;
}
